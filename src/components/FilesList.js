import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class  FileList extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

  
   
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
      <div>
  <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>     

        <div className="">
            <td>
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                 <th>
                  <a className="cv" href={file.url}> {file.name} </a>
                  </th> 
                 <th>  </th> 
                </li>
                
              ))}
                  </td>
      
        </div>
        </tr>   
          </thead>
          </table>

      </div>
    );
  }
}