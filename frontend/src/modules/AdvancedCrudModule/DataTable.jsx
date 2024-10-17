import { useEffect } from 'react';
import {
  EyeOutlined,
  FilePdfOutlined,
  RedoOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Dropdown, Table, Button } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useSelector, useDispatch } from 'react-redux';
import useLanguage from '@/locale/useLanguage';
import { adavancedCrud } from '@/redux/adavancedCrud/actions';
import { selectListItems } from '@/redux/adavancedCrud/selectors';
import { useAdavancedCrudContext } from '@/context/adavancedCrud';
import { generate as uniqueId } from 'shortid';
import { useNavigate } from 'react-router-dom';
import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';

function AddNewItem({ config }) {
  const navigate = useNavigate();
  const { ADD_NEW_ENTITY, entity } = config;

  const handleClick = () => {
    navigate(`/${entity.toLowerCase()}/create`);
  };

  return (
    <Button onClick={handleClick} type="primary" icon={<PlusOutlined />}>
      {ADD_NEW_ENTITY}
    </Button>
  );
}

export default function DataTable({ config, extra = [] }) {
  const translate = useLanguage();
  let { entity, dataTableColumns, disableAdd = false } = config;

  const { DATATABLE_TITLE } = config;

  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);

  const { pagination, items: dataSource } = listResult;

  const { adavancedCrudContextAction } = useAdavancedCrudContext();
  const { modal } = adavancedCrudContextAction;

  // Updated items array to remove edit and delete options
  const items = [
    {
      label: translate('Show'),
      key: 'read',
      icon: <EyeOutlined />,
    },
    {
      label: translate('Download'),
      key: 'download',
      icon: <FilePdfOutlined />,
    },
    ...extra,
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRead = (record) => {
    dispatch(adavancedCrud.currentItem({ data: record }));
    navigate(`/${entity}/read/${record._id}`);
  };
  const handleDownload = (record) => {
    window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${record._id}.pdf`, '_blank');
  };

  // Removed handleEdit and handleDelete functions

  dataTableColumns = [
    ...dataTableColumns,
    {
      title: '',
      key: 'action',
      fixed: 'right',
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case 'read':
                  handleRead(record);
                  break;
                case 'download':
                  handleDownload(record);
                  break;
                default:
                  break;
              }
            },
          }}
          trigger={['click']}
        >
          <EllipsisOutlined
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      ),
    },
  ];

  const handelDataTableLoad = (pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
    dispatch(adavancedCrud.list({ entity, options }));
  };

  const dispatcher = () => {
    dispatch(adavancedCrud.list({ entity }));
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatcher();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <PageHeader
        title={DATATABLE_TITLE}
        ghost={true}
        extra={[
          <Button onClick={handelDataTableLoad} key={`${uniqueId()}`} icon={<RedoOutlined />}>
            {translate('Refresh')}
          </Button>,
          !disableAdd && <AddNewItem config={config} key={`${uniqueId()}`} />,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>

      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={dataSource}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
        scroll={{ x: true }}
      />
    </>
  );
}
