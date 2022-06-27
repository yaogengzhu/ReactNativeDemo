import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import Wheel from '../../../Wheel';

const DataPickerView = props => {
  const {range} = props;
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  const getYears = useMemo(() => {
    const years = [];
    const start = new Date().getFullYear() + range;
    const end = new Date().getFullYear() - range;
    for (let i = start; i > end; i--) {
      years.push(i);
    }
    return years;
  }, []);

  const getMonths = useMemo(() => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months;
  }, []);
  const getDays = useMemo(() => {
    const days = [];
    const dayLength = new Date(year, month, 0).getDate();
    console.log(dayLength);
    for (let i = 1; i <= dayLength; i++) {
      days.push(i);
    }
    return days;
  }, [year, month]);

  return (
    <View style={{flexDirection: 'row', flex: 1, width: '100%'}}>
      <Wheel
        currentValue={year}
        extra="年"
        data={getYears}
        onChange={v => {
          setYear(v);
        }}
      />
      <Wheel
        data={getMonths}
        currentValue={month}
        extra="月"
        onChange={v => {
          setMonth(v);
        }}
      />
      <Wheel
        data={getDays}
        currentValue={day}
        extra="日"
        onChange={v => {
          setDay(v);
        }}
      />
    </View>
  );
};

export default DataPickerView;

DataPickerView.defaultProps = {
  range: 10,
};
