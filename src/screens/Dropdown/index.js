import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

class Dropdown extends Component {
    state = {
        country: 'uk',
    };
    render() {
        return (
            <DropDownPicker
                items={[
                    {
                        label: 'USA',
                        value: 'usa',
                        icon: () => <Icon name="flag" size={18} color="#900" />,
                        hidden: true,
                    },
                    {
                        label: 'UK',
                        value: 'uk',
                        icon: () => <Icon name="flag" size={18} color="#900" />,
                    },
                    {
                        label: 'France',
                        value: 'france',
                        icon: () => <Icon name="flag" size={18} color="#900" />,
                    },
                ]}
                defaultValue={this.state.country}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                    this.setState({
                        country: item.value,
                    })
                }
            />
        );
    }
}

export default Dropdown;
