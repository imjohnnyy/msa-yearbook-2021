import React, { useState } from 'react';
import { TextField, Typography, Grid, Container, FormControl, InputLabel, FormHelperText, Input, Button } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { gql, useMutation } from '@apollo/client';


export const PROJECT = gql`
fragment projectFields on Project {
    id
    name
    description
    link
    year
    modified
    created
    }
`;

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $link: String!
    $year: String!
  ) {
    addProject(input: { name: $name, description: $description, link: $link, year: $year }) {
      ...projectFields
    }
  }
  ${PROJECT}
`;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& .MuiFormHelperText-root": {
            color: "white",
        }
    }
}));

const SubmitForm = () => {
    const [addProject] = useMutation(ADD_PROJECT);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleNameUpdate = (event : any) => {
        setName(event.target.value);
    }
    const handleUrlUpdate = (event : any) => {
        setUrl(event.target.value);
    }

    const nameControl =   <FormControl>
    <InputLabel htmlFor="my-input">Project Name</InputLabel>
    <Input id="project-input" aria-decscribedby="The project name" onChange={handleNameUpdate}/>
    <FormHelperText id="The project name">The Github project name</FormHelperText>
    </FormControl>

    const urlControl =   <FormControl>
    <InputLabel htmlFor="my-input">Project Name</InputLabel>
    <Input id="url-input" aria-decscribedby="The Github url" onChange={handleUrlUpdate}/>
    <FormHelperText id="The project name">The Github project name</FormHelperText>
    </FormControl>

    const handleSubmit = async () => {
        try {
            await addProject({
                variables: {
                    name: name,
                    description: "",
                    link: url,
                    year: "2021",
                }
            })

        } catch (e) {
            console.log(e)
        }
    };




return <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', flexGrow: 1, alignContent: 'center', justifyContent: 'center' }}>
     {nameControl}
     {urlControl}
    </div>
    <Button onClick={handleSubmit}>Submit</Button>
</div>
};

export default SubmitForm;

