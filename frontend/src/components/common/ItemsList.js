import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {Item} from './';
  // If issues with Item, try adding filename back to from path
import Costper from './Costper';
import ContainerSection from '../ContainerSection';
import LoginForm from '../LoginForm';


class ItemsList extends Component {
  static renderRightButton = ({ iconName }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => Actions.addItem()}>
          <Icon size={20} style={{ color: 'black' }} name={iconName} />
        </TouchableOpacity>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = { data: [],
                   name: '',
                   price: '',
                   img_url: '',
                   star: '',
                   user_id: this.props.userId,
                   category_id: ''
                 };
  }

  componentWillMount() {
    var myItem = this;
    axios.get('http://localhost:3000/users/'+this.state.user_id+'/items')
      .then(function(response) {
        myItem.setState({data: response.data})
      })
      .catch(function(error) {
        console.log(error)
      });
    }

    render() {
      console.log('***************');
      console.log('Props are:' + this.state.user_id);
      return (
        <View style={styles.container}>
        <ScrollView>
            <View >
            {this.state.data.map((item) => {
              return(
                <View style={styles.rows}>
                  <View style={styles.itemInfoContainer}>
                    <Item key={item.item.id}
                      name={item.item.name}
                      price={item.item.price}
                      img_url={item.item.img_url}
                      star={item.item.star}
                      user_id={item.item.user_id}
                      category_id={item.item.category_id}
                    />
                    <Costper key={item.costper.id}
                          costper = {item.costper.costper}
                          item_id = {item.costper.item_id}
                    />
                  </View>
                </View>
              )})}
          </View>
      </ScrollView>
      <View style={styles.footerStyle}>
        <Text>Footer here</Text>
      </View> 
      </View>

      );
    }
}

const styles = ({
  container: {
    flex: 1,
  },
  footerStyle: {
    height: 56,
    position: 'relative',
    backgroundColor: '#16795B',
    flexGrow: 1
  },
  rows: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemInfoContainer: {
    height: 100,
    justifyContent: 'space-around',
    borderColor: '#D3D3D3',
    borderWidth: 1
  }
});
export { ItemsList };
