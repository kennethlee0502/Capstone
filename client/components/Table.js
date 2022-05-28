import React, {Component} from "react"
import "../App"
import axios from "axios"





export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = { restaurantCollection : []}
  }

  componentDidMount() {

    

        const options = {
          method: 'GET',
          url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
          params: {
            bl_latitude: '40.63911',
            tr_latitude: '40.643331',
            bl_longitude: '-74.020374',
            tr_longitude: '-73.990926',
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '10dd303346msh4a1350bd925519dp10bf90jsnaf67b00f3469'
          }
        };

        axios.request(options).then((response) => {
          this.setState({restaurantCollection : response.data})
          console.log(response.data);
        }).catch((error) => {
          console.error(error);
        });

    }

    //dataTable() {
      
       //const restaurants = this.state.restaurantCollection
       
       //if (!restaurants) {
        //return null;
      //}

       // restaurants.map((data, i) => {
       // return <DataTable obj={data} key={i} />;
       //});
  
   // }

  render() {
    const restaurants = this.state.restaurantCollection.data
    console.log('roobby',restaurants)

    if(!restaurants) {
      return null
    }
    return(
      <div className="wrapper-users">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 offset-md-8">
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>NAME</td>
                                <td>ADDRESS</td>
                                <td>RANKING</td>
            
                            </tr>
                        </thead>
                        <tbody>
                              <tr>
                            <td> {restaurants[0].name}</td>
                            <td> {restaurants[0].address}</td>
                            <td> {restaurants[0].ranking}</td>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
            </div>
    )
  }
}