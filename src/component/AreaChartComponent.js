import React, {useState} from 'react';
import {Grid, AreaChart, XAxis, YAxis} from 'react-native-svg-charts';
import {View} from 'react-native';
import * as shape from 'd3-shape';
import {Path} from 'react-native-svg';
import * as scale from 'd3-scale';
import COLOR from '../themes/Color';

const AreaChartComponent = () => {
  const xaxisData = [10, 50, 100, 200];
  const yaxisData = [1, 11, 21];

  const data = [0, 50, 18, 95, 32, 65, 29, 20];

  const Line = ({line}) => (
    <Path key={'line'} d={line} stroke={'rgb(255,20,147)'} fill={'none'} />
  );

  const axesSvg = {fontSize: 10, fill: COLOR.GREYINSH};
  const verticalContentInset = {top: 0, bottom: 0};
  const xAxisHeight = 10;

  return (
    <View style={{height: 170, padding: 10, flexDirection: 'row'}}>
      <YAxis
        data={yaxisData}
        style={{marginBottom: xAxisHeight}}
        contentInset={verticalContentInset}
        svg={axesSvg}
        formatLabel={(value, index) => {
          //returns the data for the odd indexes
          if (index == 0) {
            return '';
          } else if (index == 1) {
            return '';
          } else if (index == 2) {
            return '';
          } else if (index == 3) {
            return value + 2 + 'k';
          } else if (index == 4) {
            return '';
          } else if (index == 5) {
            return '';
          } else if (index == 6) {
            return value + 36 + 'k';
          } else if (index == 7) {
            return '';
          } else if (index == 8) {
            return '';
          } else if (index == 9) {
            return value + 80 + 'k';
          } else return value; //returns an empty string for the even indexes
        }}
      />
      <View style={{flex: 1, marginLeft: 5}}>
        <AreaChart
          style={{height: 130}}
          data={data}
          contentInset={{top: 10, bottom: 10}}
          curve={shape.curveNatural}
          withHorizontalLabels={false}
          svg={{store: 'rgb(255,20,147)', fontWeight: 'bold'}}>
          <Grid />
          <Line />
        </AreaChart>

        <XAxis
          style={{marginHorizontal: -10, height: xAxisHeight}}
          data={xaxisData}
          contentInset={{left: 10, right: 10}}
          svg={axesSvg}
          formatLabel={(value, index) => {
            //returns the data for the odd indexes
            if (index == 0) {
              return value + 1;
            } else if (index == 1) {
              return value + 10;
            } else if (index == 2) {
              return value + 19;
            } else if (index == 3) {
              return value + 28;
            } else return value; //returns an empty string for the even indexes
          }}
        />
      </View>
    </View>
  );
};

export default AreaChartComponent;
