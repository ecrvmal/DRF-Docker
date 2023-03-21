import React from "react";

let userId =0

class ProjectCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name': '',
            'user': props.users[0]?.id,
            'url':''}
        }

    handleChange(event) {
        this.setState(
        {[event.target.name]: event.target.value})
        }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.user,this.state.url)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className = {"form-group input_line" }>
                    <label className = {"input_field1"} form={"name"}>Project Name</label>
                    <input type="text" className="form-control input_field2"
                        name="name" value={this.state.name}
                        onChange={(event)=>this.handleChange(event) }/>
                </div>

                <div className = {"form-group input_line" }>
                    <label className = {"input_field1"} form={"user"}>Project User</label>

               {/*  below : to enter any digit as autor id  */}
                    <select name="user" className="form-control input_field2" onChange={(event)=>this.handleChange(event)}>
                        {this.props.users.map((item) => <option value={item.id} > {item.first_name}</option>)}
                    </select>

               {/*  below : to enter any digit as autor id
                    <input type="number" className="form-control"
                        name="author" value={this.state.author}
                        onChange={(event)=>this.handleChange(event) }/>    */}

                </div>

                 <div className = {"form-group input_line" }>
                    <label className = {"input_field1"} form={"url"}>Project URL</label>
                    <input type="text" className="form-control input_field2"
                        name="url" value={this.state.url}
                        onChange={(event)=>this.handleChange(event) }/>
                </div>

                <input type="submit" className="btn btn-primary mrgn20"
                        name="project" value="Save" />
            </form>
        )}
    }

export default ProjectCreateForm