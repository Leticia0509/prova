import styled from "styled-components";

const Menu = styled.div`
    background-color: #2B3031;
    display: flex;
    flex-direction: column;
    position: sticky;
    
    width: 17%;
    height: 100vh;


    .titulo-menu, .name-gerenciamento, .mn-alunos-menu {
        color: white;
    }

    .titulo-menu {
        height: 6em;
        justify-content: center;
        padding-left: 0.4em;
    }

    .titulo-menu span{
        color: #10EAEA;;
    }

    .alunos-menu ,.gerenciamento-menu, .titulo-menu{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .gerenciamento-menu {
        
    }

    .space-menu {
        height: 4em;
        background-color: #262626;
    }

    .alunos-menu {
        background-color: #ffffff;
    }

    .mn-alunos-menu {
        color: black;
        margin-left: 2em; 
    }

    .name-gerenciamento {
        height:4em;
    }

    .gerenciamento-menu {
        align-items: center;
    }
`

export {Menu}