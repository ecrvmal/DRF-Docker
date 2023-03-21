import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";



let index = 0
let projId = 0

const ProjectItem = ({project, users, index, deleteProject}) => {

        let usernames = []


//       console.log('proj_Id = ', index)
     if (project.project_users) {

        //     console.log('users  ', users);
             const usr_indexes = project.project_users
        //     console.log('usr_indexes   ', usr_indexes)
             const proj_users = users.filter((elem) =>{
               return   usr_indexes.includes(elem.id)
                } );
              usernames =  proj_users.map((usr) => {
                  return usr.first_name}).join(', ')

        }
     else { usernames = ' -- '
        }

    return (
    <tr>
        <td>
              <Link to={`/project/${index}`}>{project.project_name}</Link>
        </td>
        <td>
            {usernames}
        </td>
        <td>
            {project.project_date_created}
        </td>
        <td>
            {project.project_url}
        </td>
        <td>
            <button onClick={()=> deleteProject(project.id)}type='button'>Delete</button>
        </td>

    </tr>

    )
}

const ProjectListForm = ({projects, users, deleteProject}) => {

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Project name
                        </th>
                        <th>
                            Project Users
                        </th>
                        <th>
                            Date Created
                        </th>
                        <th>
                            Project URL
                        </th>
                    </tr>
                    {projects.map((project, index) => <ProjectItem project = {project}
                                                            users = {users}
                                                            index = {index}
                                                            deleteProject={deleteProject}
                                                                  />
                    )}

                </tbody>
            </table>
            <div className="form-group input_line">
                <Link to="/project/create" className="link_btn">
                New Project
                </Link>
                <Link to="/project/search" className="link_btn">
                Search Proj
                </Link>
             </div>
            {/* <input type="button" onClick="location.href='/projects/create';" value="New Project"/> */}
            {/* <form action="/projects/create"> */}
               {/*  <input type="submit" value="New Project" />*/}
               {/*  </form>  */}
            {/* <button onClick={handleClickBtn , window.location.reload()} type="button">NewProject</button> */}

        </div>
       )
    }


export default ProjectListForm