<template>
    <div class="container">
        <div class="cta-form">
            <h2>Заполни форму</h2> 
            <p>В ближайшее время с тобой свяжутся модераторы для уточнения деталей.</p>
        </div>
        
        <form @submit="onSubmit" class="form">
        
            <input type="text" placeholder="Ваш ник в дискорде" class="form__input" id="name" v-model="form.name" />
            <label for="name" class="form__label">Ваш ник в дискорде</label>

            <input type="email" placeholder="Ваш почтовый адрес" class="form__input" id="email" v-model="form.email" />
            <label for="email" class="form__label">Ваш почтовый адрес</label>

            <input type="text" placeholder="О вас" class="form__input" id="self" v-model="form.message" />
            <label for="self" class="form__label">О вас</label>
            
            <button type="submit">Отправить</button>
        </form>
    </div>
    

</template>

<script>
    export default{
        name: "Form",

        data(){
            return{
                form:{
                    name: '',
                    email: '',
                    message: ''
                }              
            }
        },
    
        methods: {
            onSubmit (e) {
                e.preventDefault()
                console.log('Отправляемые данные:', this.form)
            }
        }
    }
</script>

<style scoped>

    .container {
        width: 100%;
        max-width: 700px;
        display: flex;
        flex-direction: raw;
        justify-content: center;
        align-items: center;
        padding: 2rem 2rem 1.5rem;
        background-color: rgb(148, 149, 166, .5);
        max-height: 30vh;
        border-radius: 15px;
    }
    .cta-form {
        margin-bottom: 0;
        margin-right: 2rem;
        text-align: left;
    }

    h2 {
        font-size: 26px;
        width: 100%;
        max-width: 25ch;
        margin: 0 auto;
        text-align: left;
    }

    p {
        margin-top: 1rem;
        font-size: 20px;
        width: 100%;
        max-width: 26ch;
        -webkit-text-stroke: .2px black;
    }
    .form {
      align-self: center;
    }
    

    .form__input {
        width: 250px;   
        height: 2.5rem;
        padding: 0 1.25rem;
        border: 1px solid black;
        border-radius: 5px;
        margin: 0.625rem auto;
        transition: all 250ms;

      &:focus + .form__label, &:not(:placeholder-shown) + .form__label {
        transform: translateY(-5rem) scale(1);
        color: rgb(255, 255, 255);
      }
      
      &::placeholder {
        display: none;
        color: transparent;
        
        user-select: none; 
      }

      &:not(:placeholder-shown) {
        border-top-color: rgba(0, 0, 0, 0.5);
      }
    
    }

    .form__label {
      font-size: 1rem;
      font-weight: bold;
      color: grey;
      display: flex;    
      
      transform: translate(1.25rem,-2.5rem);
      transform-origin: 0 0; 
      transition: all 500ms;
      
      user-select: none; 
      
      pointer-events: none;
    }

    button{
    align-items: center;
    appearance: none;
    background-color: #fefefedb;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 28px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
    }

    button:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
    }

    button:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
    }
    
    
</style>