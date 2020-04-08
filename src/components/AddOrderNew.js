import React, { Component } from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class AddOrderNew extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', quantity: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      render() {
        return (
          <div>
            <OrderItems items={this.state.items} />
            <div style={{ display: 'flex', alignItems: 'stretch', marginLeft: '15px', marginRight: '15px', color: '#888', marginTop: '10px' }}>
                <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
                <Select
                    showSearch
                    style={{ marginRight: '5px', width: '50%'  }}
                    placeholder="Pick your order"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Cookie">Cookie</Option>
                    <Option value="Cupcake">Cupcake</Option>
                    <Option value="Salted Caramel Cake">Salted Caramel Cake</Option>
                    <Option value="Sansrival Chips">Sansrival Chips</Option>
                </Select>
                    <input
                        onChange={this.handleChange}
                        value={this.state.quantity}
                        style={{ width: '15%', marginRight: '5px', border: 'solid 1px #ccc', borderRadius: '5px', padding: '4px' }}
                    />
                    <button style={{ width: '30%', borderStyle: 'solid' ,borderRadius: '5px', padding: '4px', color: 'white', backgroundColor: '#F1C40F', borderColor: '#F1C40F' }}>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
          </div>
        );
      }
    
      onChange = (value) => {
            console.log(`selected ${value}`);
            this.setState({ text: value });
        };

      handleChange(e) {
        this.setState({ quantity: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          quantity: this.state.quantity,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: '',
          quantity: ''
        }));
      }
    }
    
    class OrderItems extends React.Component {
      render() {
        const flexCont = {
            margin: '0 15px',
            display: 'flex',
            alignItems: 'stretch',
            marginTop: '10px',
            marginBottom: '5px'
        }

        return (
          <ul>
            {this.props.items.map(item => (
                <div key={item.id} style={flexCont}>
                    <div style={{ width: '83%', fontWeight: 'bold' }}>{item.text}</div>
                    <div style={{ fontWeight: 'bold' }}>{item.quantity}</div>
                </div>
            ))}
          </ul>
        );
      }
    }



export default AddOrderNew
