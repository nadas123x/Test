

import axios from 'axios';
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class   OffreComponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            offres:[],
            currentPage:1,
            recordPerPage:7,
            search:'',
        }
    }

    componentDidMount(){        
        this.getOffresByPagination(this.state.currentPage);
    }
    getOffresByPagination(currentPage){
            currentPage=currentPage-1;
        axios.get("http://localhost:8080/search")
        .then(response => response.data).then((data) =>{
             this.setState({offres:data.content,
                totalPages:data.totalPages,
                totalElements: data.totalElements,
                currentPage: data.number+1
            });
           });
    }

    //Writing All the pagination functions
    //Show Next page
    showNextPage = () =>{
        if(this.state.currentPage < Math.ceil(this.state.totalElements/this.state.recordPerPage)){
            if(!this.state.search){
            this.getOffresByPagination(this.state.currentPage + 1);
            }else{
                this.searchOffre(this.state.currentPage + 1)
            }
        }
    };

    //Show Last Page
    showLastPage = () =>{
        if(this.state.currentPage < Math.ceil(this.state.totalElements/this.state.recordPerPage)){
            if(!this.state.search){
            this.getOffresByPagination(Math.ceil(this.state.totalElements/this.state.recordPerPage));
            }
            else{
                this.searchOffre(Math.ceil(this.state.totalElements/this.state.recordPerPage));
            }
        }
    };
    //Show First page
    showFirstPage = ()=>{
        let firstPage = 1;
        if(this.state.currentPage > firstPage){
            if(!this.state.search){
            this.getOffresByPagination(firstPage);
            }else{
                this.searchOffre(firstPage)
            }
        }
    };

    //Show previous page
    showPrevPage = () =>{
        let prevPage = 1
        if(this.state.currentPage > prevPage){
            if(!this.state.search){
            this.getOffresByPagination(this.state.currentPage - prevPage);
            }else{
                this.searchOffre(this.state.currentPage - prevPage);
            }
        }
    };
    //Search Box Method
    searchBox = (e) => {
        this.setState({
            //assigning value to event target
            [e.target.name]:e.target.value,
        });
    };
    //Search Method Logic
    searchOffre=(currentPage)=> {
        currentPage=currentPage-1;
        axios.get("http://localhost:8080/search"+this.state.search+"?page="+currentPage+"&size="+this.state.recordPerPage)
        .then(response => response.data).then((data) =>{
             this.setState({offres:data.content,
                totalPages:data.totalPages,
                totalElements: data.totalElements,
                currentPage: data.number+1
            });
           });
    };

    //Reset Search Box
    resetOffre = (currentPage)=>{
        this.setState({"search":''});
        this.getOffresByPagination(this.state.currentPage);
    };

    render(){
        const {offres, currentPage, totalPages,recordPerPage,search} = this.state;
        return(
        <div>
            
            <h1 className="text-center mt-5 ">List of Offres</h1>
            <div className="container mt-2">
            <div style={{float: 'center'}} align="center">
                <div class="form-group mb-2">
                            <input type="text" class="form-control" name="search" size="50"  placeholder="Search Here" value={search}  onChange={this.searchBox}/>
                            <button type="button" name="search" class="btn btn-info my-2 text-center mr-2" onClick={this.searchOffre}>Search Offre</button>
                            <button type="reset" class="btn btn-secondary text-center ml-5" style={{marginLeft:'10px'}} onClick={this.resetOffre}>Clear Offre</button>
                </div>
            </div>
            <table className="table table-bordered border-info shadow">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Offre Name</th>
                    <th>Offre Author</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {offres.length===0?
                        <tr align="center"><td colSpan="5">{offres.name}</td></tr>:
                        offres.map(
                            (offres,index) =>(
                                <tr key = {offres.id}>
                                        <td>{(recordPerPage*(currentPage-1))+index+1}</td>
                                        <td>{offres.name}</td>
                                        <td>{offres.description}</td>
                                        <td>{offres.quantity}</td>
                                    
                                        <td>{offres.imageback}</td>
                                    
                                        <td>{offres.datepub}</td>
                                    
                                </tr>
                            )
                        )
                    }
                </tbody>

            </table>
            <table className="table">
                <div style={{float:'left',fontFamily: 'monospace',color: '#0275d8'}}>
                    Page {currentPage} of {totalPages}
                </div>
                <div style={{float:'right'}}>
                <div class="clearfix"></div>
                <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a type="button" class="page-link"  disabled={currentPage===1?true:false} onClick={this.showPrevPage}>Previous</a></li>
    <li class="page-item"><a type="button" class="page-link"  disabled={currentPage===1?true:false } onClick={this.showFirstPage}>First</a></li>
    <li class="page-item"><a type="button" class="page-link"  disabled={currentPage===totalPages?true:false } onClick={this.showNextPage}>Next</a></li>
    <li class="page-item"><a type="button" class="page-link"  disabled={currentPage===totalPages?true:false} onClick={this.showLastPage}>Last</a></li>
  </ul>
</nav>
                </div>
            </table>
            </div>
        </div>
        )
    }
}
export default OffreComponent