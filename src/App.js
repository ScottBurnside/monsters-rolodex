import React, {Component} from 'react' ;
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
import { Dashboard } from './components/dashboard/dashboard.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      costsLabels: [],
      costsValues: [],
    };

  }

  componentDidMount(){
    fetch('https://metrics.enthuse-test.com/v1/costs')
    .then(response => response.json())
    .then(data => this.setState({costsLabels: data[0].labels, costsValues: data[0].data}));

    fetch('https://metrics.enthuse-test.com/v1/metrics')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }
  
  render() {
    const { monsters, searchField, costsLabels, costsValues, cost} = this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster?.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const costData = {labels: costsLabels, data: costsValues};
    return (
      <div className="App">
        <img alt="logo" src={`https://id.enthuse-test.com/sso/static/common/images/enthuse/enthuse_logo_horizontal.svg`}  /> 
        <h1> Metrics Dashboard </h1>
        <SearchBox
          placeholder='search metrics'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
        <Dashboard costData={costData}/>
      </div>
    );
  }
}
export default App;
