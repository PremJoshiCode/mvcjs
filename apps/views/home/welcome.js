export default function home(){
    return `
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: background: rgb(42,39,83);
            background: linear-gradient(90deg, rgba(42,39,83,1) 0%, rgba(145,143,247,1) 22%, rgba(126,152,248,1) 63%, rgba(0,212,255,1) 100%);
            height:100vh;
            width:100vw;
        }
        .title{
            color: #000;
            color: rgba(0, 0, 0, 0.5);
            font-family: Arial, sans-serif;
            opacity: 0.8;
            font-size: 100px;
            font-weight: 700;
            user-select: none;
        }
        .container {
            -webkit-animation: animationColor 30s ease infinite;
            -moz-animation: animationColor 30s ease infinite;
            animation: animationColor 30s ease infinite;
            background-size: 600% 600%;

        }
        
        @-webkit-keyframes animationColor {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
        @-moz-keyframes animationColor {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
        @keyframes animationColor {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
    </style>
    <div class="container">
        <h1 class="title">Wellcome</h1>
    </div>
    `;
}