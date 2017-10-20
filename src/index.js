import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Search from './components/Search/Search'
import Nav from './components/Nav/Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ResultsList from './components/ResultsList/ResultsList'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            searched: false,
<<<<<<< HEAD
            loading: false,
            results: [],
=======
            results: [],
            loading: false,
>>>>>>> cc322d3f9ca0062e81d2f01142b17d205ff2f750
        }
    }

    updateSearchTerm = (searchTerm) => {
<<<<<<< HEAD
        if(searchTerm.length === 0){
            return 0
        } else {
            this.setState({loading: true})
            //console.log(`We are searching for ${searchTerm}`)
            this.getSearchData(searchTerm).then((data) => {
                //console.log(data)
=======
        if (searchTerm.length === 0) {
            return null
        } else {
            this.setState({loading: true})
            this.getSearchData(searchTerm).then((data) => {
>>>>>>> cc322d3f9ca0062e81d2f01142b17d205ff2f750
                this.setState({
                    searched: true,
                    loading: false,
                    results: data
                })
            })
        }
    }

    resetSearch = () => {
        this.setState({
            results: [],
            loading: false,
            searched: false
        })
    }

    getSearchData = async (searchTerm) => {
        let response
        try {
            response = await fetch(`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))`)
        } catch (e) {
            console.log(e)
        }
        let data
        try {
            data = await response.json()
        } catch (e) {
            console.log(e)
        }
        return data
    }

    render () {
        return (
            <Router>
                <div>
                    <Nav
                        userHasSearched={this.state.searched} />
                    <Search
                        logoSizeIsSmall={this.state.searched}
                        updateSearchTerm={this.updateSearchTerm}
                        resetSearch={this.resetSearch}
                        changeFilter={this.changeFilter}
                        filter={this.state.filter} />
<<<<<<< HEAD
                    <Route exact path="/" render={ () => (
                        <ResultsList
                            loading={this.state.loading}
                            results={this.state.results}
                            searched={this.state.searched}
                        />
                    ) } />
                    <Route path="/map/" render={ () => (
                        <h1>Map</h1>
                    ) } />
=======
                    <Route exact path="/" render={() => (
                        <ResultsList
                           loading={this.state.loading}
                           results={this.state.results}
                           searched={this.state.searched}
                        />
                    )} />
                    <Route path="/map/" render={() => (
                        <h1>Map</h1>
                    )} />
>>>>>>> cc322d3f9ca0062e81d2f01142b17d205ff2f750
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
