import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'reactbootstrap';

class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [],
        };
    }
    componentDidMount() {
        this.getGitHubData('greg');
    }
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }
    render() {
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <Media.Left>
                    <a href={user.html_url}>
                        <img width={64} height={64} src={user.avatar_url}
                            alt="Image" />
                    </a>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{user.login}</Media.Heading>
                    <p>Score: {user.score}</p>
                </Media.Body>
            </Media>
        );
        return (

            <div>
                <h3>GitHub Users Results</h3>
                { this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
}
export default GitHub;