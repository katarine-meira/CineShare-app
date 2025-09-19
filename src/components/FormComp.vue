<template>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}" 
    class="col-12 col-md-6 flex content-center">
            <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center shadow-10">
                        <img src="/src/assets/avatar.png" alt="avatar">
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
                    <q-form class="q-gutter-md">
                        <!-- fomulário de login -->
                        <q-input v-model="email" label="Email" v-show="!mostrar_info">
                        </q-input>
                        <q-input v-model="senha" label="Senha" type="password" v-show="!mostrar_info">
                        </q-input>
                        <!-- fomulário de cadastro -->
                        <q-input v-model="nome_register" v-show="mostrar_info" label="Nome">
                        </q-input>
                        <q-input v-model="email_register" label="Email" v-show="mostrar_info">
                        </q-input>
                        <q-input v-model="senha_register" label="Senha" type="password" v-show="mostrar_info">
                        </q-input>
                        <div>
                            <q-btn class="full-width" color="primary" rounded v-show="!mostrar_info" @click="login">Login</q-btn>
                            <q-btn class="full-width" color="primary" rounded v-show="mostrar_info" @click="register">Cadastrar</q-btn>
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

    async function login(){
        try{
            await loginUser(email.value, senha.value);
            $q.notify({
                message: "Login realizado com sucesso!",
                color: 'purple' 
            })
            router.push("/home");
        }
        catch(err){
            alert("Erro ao logar: " + err.message);
        }
    }

    async function register() {
        try{
            const cred = await registerUser(email_register.value, senha_register.value);
            alert("Usuário cadastrado com sucesso: " + cred.user.email);
            router.push("/home");
        }
        catch (err) {
            alert("Erro ao cadastrar: " + err.message);
        }
    }
    

</script>

<style scoped>
    

</style>