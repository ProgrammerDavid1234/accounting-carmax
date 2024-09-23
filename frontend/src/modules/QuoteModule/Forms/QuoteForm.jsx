import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { Form, Input, InputNumber, Button, Select, Divider, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import AutoCompleteAsync from '@/components/AutoCompleteAsync';
import ItemRow from '@/modules/ErpPanelModule/ItemRow';
import MoneyInputFormItem from '@/components/MoneyInputFormItem';
import { selectFinanceSettings } from '@/redux/settings/selectors';
import { useDate } from '@/settings';
import useLanguage from '@/locale/useLanguage';
import calculate from '@/utils/calculate';
import { useSelector } from 'react-redux';
import SelectAsync from '@/components/SelectAsync';
import SelectCurrency from '@/components/SelectCurrency'; // Ensure this path is correct

export default function QuoteForm({ subTotal = 0, current = null }) {
  const { last_quote_number } = useSelector(selectFinanceSettings);
  if (last_quote_number === undefined) {
    return <></>;
  }
  return <LoadQuoteForm subTotal={subTotal} current={current} />;
}

function LoadQuoteForm({ subTotal = 0, current = null }) {
  const translate = useLanguage();
  const { dateFormat } = useDate();
  const { last_quote_number } = useSelector(selectFinanceSettings);
  const [lastNumber, setLastNumber] = useState(() => last_quote_number + 1);
  const [total, setTotal] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());
  
  const handelTaxChange = (value) => {
    setTaxRate(value / 100);
  };

  useEffect(() => {
    if (current) {
      const { taxRate = 0, year, number } = current;
      setTaxRate(taxRate / 100);
      setCurrentYear(year);
      setLastNumber(number);
    }
  }, [current]);

  useEffect(() => {
    const currentTotal = calculate.add(calculate.multiply(subTotal, taxRate), subTotal);
    setTaxTotal(Number.parseFloat(calculate.multiply(subTotal, taxRate)));
    setTotal(Number.parseFloat(currentTotal));
  }, [subTotal, taxRate]);

  const addField = useRef(false);
  
  useEffect(() => {
    addField.current.click();
  }, []);

  return (
    <>
      <Row gutter={[12, 0]}>
        <Col className="gutter-row" span={8}>
          <Form.Item
            name="client"
            label={translate('Client')}
            rules={[{ required: true }]}
          >
            <AutoCompleteAsync
              entity={'client'}
              displayLabels={['name']}
              searchFields={'name'}
              redirectLabel={'Add New Client'}
              withRedirect
              urlToRedirect={'/customer'}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={3}>
          <Form.Item
            label={translate('number')}
            name="number"
            initialValue={lastNumber}
            rules={[{ required: true }]}
          >
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={3}>
          <Form.Item
            label={translate('year')}
            name="year"
            initialValue={currentYear}
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        {/* Removed SelectCurrency */}
        <Col className="gutter-row" span={4}>
          <Form.Item
            label={translate('status')}
            name="status"
            initialValue={'draft'}
          >
            <Select
              options={[
                { value: 'draft', label: translate('Draft') },
                { value: 'pending', label: translate('Pending') },
                { value: 'sent', label: translate('Sent') },
                { value: 'accepted', label: translate('Accepted') },
                { value: 'declined', label: translate('Declined') },
              ]}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            name="date"
            label={translate('Date')}
            rules={[{ required: true, type: 'object' }]}
            initialValue={dayjs()}
          >
            <DatePicker style={{ width: '100%' }} format={dateFormat} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item
            name="expiredDate"
            label={translate('Expire Date')}
            rules={[{ required: true, type: 'object' }]}
            initialValue={dayjs().add(30, 'days')}
          >
            <DatePicker style={{ width: '100%' }} format={dateFormat} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={10}>
          <Form.Item label={translate('Note')} name="notes">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider dashed />
      {/* Rest of the component remains unchanged */}
    </>
  );
}

