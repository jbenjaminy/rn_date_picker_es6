import React, { Component } from 'react';
import { DatePickerIOS, Text, TextInput, View } from 'react-native';
import { Label, Heading } from './components';

 class DatePicker extends Component {
     static defaultProps = {
         date: new Date(),
         timeZoneOffsetInHours: (-1) * ((new Date()).getTimezoneOffset() / 60),
     };

     state = {
         date: this.props.date,
         timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
     };

     onDateChange(date) {
         this.setState({ date });
     }

     onTimezoneChange(event) {
         const offset = parseInt(event.nativeEvent.text, 10);
         if (isNaN(offset)) {
             return;
         }

         this.setState({ timeZoneOffsetInHours: offset });
     }

     render() {
         const { date, timeZoneOffsetInHours } = this.state;

        return (
            <View style={{ paddingTop: 30 }}>
                <Label label="Value:">
                    <Text>
                        { `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
                    </Text>
                </Label>
                <Label label="Timezone:">
                    <TextInput
                        onChange={this.onTimezoneChange}
                        style={styles.textinput}
                        value={timeZoneOffsetInHours.toString()}
                    />
                    <Text>
                        hours from UTC
                    </Text>
                </Label>
                <Heading label="Date + time picker" />
                <DatePickerIOS
                    date={date}
                    mode="datetime"
                    timeZoneOffsetInMinutes={timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                />
                <Heading label="Date picker" />
                <DatePickerIOS
                    date={date}
                    mode="date"
                    timeZoneOffsetInMinutes={timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                />
                <Heading label="Time picker, 10-minute interval" />
                <DatePickerIOS
                    date={date}
                    mode="time"
                    timeZoneOffsetInMinutes={timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                    minuteInterval={10}
                />
            </View>
        );
    }
}

const styles = {
    textinput: {
        height: 26,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
        fontSize: 13
    }
};

export default DatePicker;
