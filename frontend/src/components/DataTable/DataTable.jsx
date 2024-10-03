import { useCallback, useEffect } from 'react';

import { RedoOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Table, Button, Input } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectListItems } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import { dataForTable } from '@/utils/dataStructure';
import { useMoney, useDate } from '@/settings';

import { generate as uniqueId } from 'shortid';

import { useCrudContext } from '@/context/crud';
import { selectLangDirection } from '@/redux/translate/selectors';

function AddNewItem({ config }) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panel } = crudContextAction;
  const { ADD_NEW_ENTITY } = config;

  const handleClick = () => {
    panel.open();
    collapsedBox.close();
  };

  return (
    <Button onClick={handleClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}

export default function DataTable({ config, extra = [] }) {
  let { entity, dataTableColumns, DATATABLE_TITLE, fields, searchConfig } = config;
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox } = crudContextAction;
  const translate = useLanguage();
  const { moneyFormatter } = useMoney();
  const { dateFormat } = useDate();

  let dispatchColumns = [];
  if (fields) {
    dispatchColumns = [...dataForTable({ fields, translate, moneyFormatter, dateFormat })];
  } else {
    dispatchColumns = [...dataTableColumns];
  }

  // Removed the delete button column
  dataTableColumns = [...dispatchColumns];

  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);
  const { pagination, items: dataSource } = listResult;
  const dispatch = useDispatch();

  const handleDataTableLoad = useCallback(
    (pagination) => {
      const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
      dispatch(crud.list({ entity, options }));
    },
    [dispatch, entity]
  );

  const filterTable = (e) => {
    const value = e.target.value;
    const options = { q: value, fields: searchConfig?.searchFields || '' };
    dispatch(crud.list({ entity, options }));
  };

  const dispatcher = () => {
    dispatch(crud.list({ entity }));
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatcher();
    return () => {
      controller.abort();
    };
  }, [dispatch, entity]);

  const langDirection = useSelector(selectLangDirection);

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        backIcon={langDirection === 'rtl' ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        title={DATATABLE_TITLE}
        ghost={false}
        extra={[
          <Input
            key={`searchFilterDataTable`}
            onChange={filterTable}
            placeholder={translate('search')}
            allowClear
          />,
          <Button
            onClick={handleDataTableLoad}
            key={`${uniqueId()}`}
            icon={<RedoOutlined />}
          >
            {translate('Refresh')}
          </Button>,
          <AddNewItem key={`${uniqueId()}`} config={config} />,
        ]}
        style={{ padding: '20px 0px', direction: langDirection }}
      />

      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={dataSource}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handleDataTableLoad}
        scroll={{ x: true }}
      />
    </>
  );
}
