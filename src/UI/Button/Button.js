import styled from 'styled-components';

const ButtonComponent=styled.button`
text-transform: capitalize;
color:var(--mainYellow);
font-size:1.2rem;
background:transparent;
border:0.15rem solid var(--mainYellow);
padding:.3rem;
margin-right:0.5rem;
cursor:pointer;

color:${props=> props.cart?"var(--mainYellow)":"var(--lightBlue)"};
border:${props=> props.cart?"0.15rem solid var(--mainYellow)":"0.15rem solid var(--lightBlue)"};

border-radius:.6rem;
transition:all 0.3s ease;
&:hover{
    background:${props=> props.cart?"var(--mainYellow)":"var(--lightBlue)"};
    color:var(--mainWhite);
    border:0.15rem solid var(--mainWhite);
};
&:focus{
    outline:none;
}
`


export default ButtonComponent;