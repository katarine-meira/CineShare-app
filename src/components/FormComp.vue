<template>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}" 
    class="col-12 col-md-6 flex content-center">
            <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center shadow-10">
                        <img src="img/avatar.png" alt="avatar">
                    </q-avatar>
                </q-card-section>
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col text-h6 ellipsis flex justify-center">
                            <h2 class="text-h3 text-uppercase q-my-none text-weight-regular">
                                {{texto_info}}
                            </h2>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-form class="q-gutter-md" ref="formRef" @submit.prevent="onSubmit">
                        <!-- fomulário de login -->
                        <q-input v-model="email" label="Email" v-if="!mostrar_info" 
                        :rules="[ val => val && val.length > 0 || 'Digite seu email.']" lazy-rules>
                        </q-input>
                        <q-input v-model="senha" label="Senha" type="password" v-if="!mostrar_info"
                        :rules="[ val => val && val.length > 0 || 'Digite sua senha.']" lazy-rules>
                        </q-input>
                        <!-- fomulário de cadastro -->
                        <q-input v-model="nome_register" v-if="mostrar_info" label="Nome"
                        :rules="[ val => val && val.length > 0 || 'Digite seu nome.']" lazy-rules>
                        </q-input>
                        <q-input v-model="email_register" label="Email" v-if="mostrar_info"
                        :rules="[ val => val && val.length > 0 || 'Digite seu email.']" lazy-rules>
                        </q-input>
                        <q-input v-model="senha_register" label="Senha" type="password" v-if="mostrar_info"
                        :rules="[ val => val && val.length > 0 || 'Escolha uma senha.',
                            val => val.length >= 6 || 'Mínimo 6 dígitos.'
                        ]" lazy-rules>
                        </q-input>
                        <div>
                            <q-btn class="full-width" color="primary" rounded v-show="!mostrar_info" type="submit" >Login</q-btn>
                            <q-btn class="full-width" color="primary" rounded v-show="mostrar_info" type="submit" >Cadastrar</q-btn>
                            <div class="text-center q-mt-sm q-gutter-lg">
                                <!-- <span v-model="mostrar_info" class="text-grey-8" to="/register">Esqueceu a senha?</span> -->
                                <span class="text-grey-8 cursor-pointer" @click="showInfo">{{texto_botao_register}}</span>
                            </div>
                        </div>
                        
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
</template>

<script setup>
    import { ref } from "vue"
    import {loginUser} from "src/services/authServices";
    import {registerUser} from "src/services/authServices";
    import { useRouter } from "vue-router";
    import { useQuasar } from "quasar";

    const $q = useQuasar()
    
    const email = ref("");
    const senha = ref("");
    const nome_register = ref("");
    const email_register = ref("");
    const senha_register = ref("");

    const router = useRouter();
    
    const mostrar_info = ref(false)
    const texto_botao_register = ref('Criar conta')
    const texto_info = ref('Login')
    const formRef = ref(null)

    function showInfo(){
        mostrar_info.value = !mostrar_info.value
        if(!mostrar_info.value){
            texto_botao_register.value = 'Criar conta'
            texto_info.value = 'Login'
        }
        else{
            texto_botao_register.value = 'Voltar para login'
            texto_info.value = 'Cadastro'
        }
    }

    async function onSubmit(){
        const valid = await formRef.value.validate()
        if (!valid) return // se não for válido, para aqui

        if(!mostrar_info.value){
            await login()
        }
        else{
            await register()
        }
    }

    async function login(){
        try{ 
            await loginUser(email.value, senha.value);
            $q.notify({
                message: "Login realizado com sucesso!",
                icon: 'login',
                color: 'primary',
                textColor: 'white'
            })
            router.push("/home");
        }
        catch{
            $q.notify({
                message: "Email ou senha incorretos!",
                icon: 'warning',
                color: 'primary',
                textColor: 'white'
            })
        }
    }

    async function register() {
        try{
            await registerUser(email_register.value, senha_register.value);
            $q.notify({
                message: "Usuário cadastrado com sucesso!",
                icon: 'check',
                color: 'primary',
                textColor: 'white'
            })
            router.push("/home");
        }
        catch{
            $q.notify({
                message: "Email ou senha incorretos!",
                icon: 'warning',
                color: 'primary',
                textColor: 'white'
            })
        }
    }

</script>

<style scoped>
    

</style>