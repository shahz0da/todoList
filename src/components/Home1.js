import styled from "styled-components";

const BigCard = styled.div`
    background: rgb(56,42,93);
    background: linear-gradient(90deg, rgba(56,42,93,0.9360119047619048) 0%, rgba(43,114,189,1) 35%, rgba(135,209,224,1) 100%);
    padding: 100px 0 35px 0;
    height: 100%;
    font-weight: bold;
    @media screen and (max-width:700px){
        .todocard{
        border: 4px solid black;
        box-shadow: 0 5px 6px 3px black;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        .middleCard{
            display: block;
        }
        .buttonsCard{
            padding-bottom: 15px;
            padding-top: 5px;
        }
       
    }
    /* boshqa styllar */
        
    }
    .todocard{
        border: 4px solid rgb(10, 51, 104);
        box-shadow: 0 9px 9px 3px rgba(0, 0, 0, 0.424);
        padding:  20px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.678);
    }
    .fghfgh{
        margin-top: 90px;
    }
    .provayders{
            display: flex;
            justify-content: center;
            
           
            a{
                text-decoration: none;
                padding: 10px;
                color: white;
                font-size: 20px;
                &:hover{
                    transition: 0.5s;
                    color: white;
                    transform: translateY(-5px);
                }
            
            }
        }
  
    .middleCard{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(175, 175, 175, 0.616);
        padding-bottom: 5px;
        background-color: white !important;
        margin: 5px 0;
        border-radius: 5px;
    }
    .chiziq{
        text-decoration: line-through;
        color: red;
    }
    .wt{
        height: 18px;
        padding: 0 4px;
        margin: 1px;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    button:hover{
        box-shadow: 1px 2px 2px 0 gray;
        font-weight: bold;
    }
`;

export default BigCard;