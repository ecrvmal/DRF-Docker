import React from "react";



class TodoCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'text': '',
            'author': props.users[0]?.id,
            'project': props.projects[0]?.id}
        }

    handleChange(event) {
        this.setState(
        {[event.target.name]: event.target.value})
        }

    handleSubmit(event) {
        this.props.createTodo(this.state.text, this.state.author,this.state.project)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className = {"form-group input_line" }>
                    <label className = {"input_field1"} form={"text"}>TODO Text</label>
                    <input type="text" className="form-control input_field2"
                        name="text" value={this.state.text}
                        onChange={(event)=>this.handleChange(event) }/>
                </div>

                <div className = {"form-group input_line"}>
                    <label className = {"input_field1"} form={"author"}>TODO Author</label>

                    <select name="author" className="form-control input_field2" onChange={(event)=>this.handleChange(event)}>
                        {this.props.users.map((item) => <option value={item.id} > {item.first_name}</option>)}
                    </select>
                </div>

                <div className = {"form-group input_line"}>
                    <label className = {"input_field1"}  form={"project"}>TODO Project</label>

                    <select name="project" className="form-control input_field2" onChange={(event)=>this.handleChange(event)}>
                        {this.props.projects.map((item) => <option value={item.id} > {item.project_name}</option>)}
                    </select>
                </div>

                <input type="submit" className="btn btn-primary mrgn20"
                        name="todo" value="Save" />
            </form>
        )}
    }

export default TodoCreateForm