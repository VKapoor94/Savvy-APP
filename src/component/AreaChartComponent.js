import React from 'react';
import {View} from 'react-native';
import {AreaChart, Grid, XAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Path} from 'react-native-svg';
import * as scale from 'd3-scale';

class AreaChartComponent extends React.PureComponent {
  render() {
    const data = [0, 50, 18, 95, 32, 65, 29, 20];
    const xaxis = [1, 11, 21, 31];
    const Line = ({line}) => (
      <Path key={'line'} d={line} stroke={'rgb(255,20,147)'} fill={'none'} />
    );
    return (
      <View>
        <AreaChart
          style={{height: 130}}
          data={data}
          contentInset={{top: 10, bottom: 10}}
          curve={shape.curveNatural}
          svg={{store: 'rgb(255,20,147)'}}>
          <Grid />
          <Line />
        </AreaChart>
        <XAxis
          style={{marginTop: 10}}
          data={xaxis}
          scale={scale.scaleBand}
          spacingInner={0.05}
          svg={{fontSize: 10, fill: 'grey'}}
          formatLabel={(value, index) => index}
          labelStyle={{color: 'black'}}
        />
      </View>
    );
  }
}
export default AreaChartComponent;
