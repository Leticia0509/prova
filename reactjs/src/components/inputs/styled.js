import styled from 'styled-components'

const Inputstyle = styled.div`

    margin-left: -21em;
    .pt1-inputs {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        width: 50em;
    }

    .pt2-inputs {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        width: 50em;
    }


    .pt2-inputs label {
        margin: 1em 1.9em;
    }

    .pt3-inputs {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        width: 50em;
    }

    .pt3-inputs label {
        margin: 0.2em 2.16em;
    }

    .img {
        margin: 0.6em 2em 0.2em 0em;
    }

    .link-img {
        margin: 1.2em 0em;
    }

    .img input {
        width: 42em;
    }

    label {
        margin: 0.2em 2em;
        align-items: center;
        color: #615858;
        font-family: Roboto;
        font-size: 18px;
        justify-content: center;
    }

    input {
        width: 15em;
        height: 36px;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        margin: 0em 1em;
        outline: none;
    }

    form {
        text-align: end;
    }

    textarea {
        resize: none;
        margin-right: 1.8em;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
    }

    .textarea {
        display: flex;
        flex-direction: row;
        text-align:start ;

    }

    .textarea div {
        margin: 0em 0.9em 6.5em 0em;
    }
;
`

export {Inputstyle}