package android.usuario.comandavirtual;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import config.ConfiguracaoFirebase;
import model.Usuario;

public class CadastroActivity extends AppCompatActivity {

    private Usuario usuario;
    private EditText emailC;
    private EditText senhaC;
    private EditText razaoSocial;

    private EditText cnpj;
    private EditText numero;
    private EditText bairro;
    private EditText rua;
    private EditText cep;
    private EditText telefone;

    public Button btncadastro;
    private FirebaseAuth firebaseAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro);

        emailC = (EditText) findViewById(R.id.campoemail);
        senhaC = (EditText) findViewById(R.id.camposenha);
        razaoSocial = (EditText) findViewById(R.id.rsocial);

        cnpj = (EditText) findViewById(R.id.cnpj);
        numero = (EditText) findViewById(R.id.numero);
        bairro = (EditText) findViewById(R.id.bairro);
        rua = (EditText) findViewById(R.id.rua);
        cep = (EditText) findViewById(R.id.cep);
        telefone = (EditText) findViewById(R.id.telefone);

        btncadastro = (Button) findViewById(R.id.buttonCadastro);

    btncadastro.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            usuario = new Usuario();
            usuario.setRazaoSocial(razaoSocial.getText().toString());
            usuario.setEmail(emailC.getText().toString());
            usuario.setSenha(senhaC.getText().toString());
            usuario.setBairro(bairro.getText().toString());
            usuario.setCep(cep.getText().toString());
            usuario.setCnpj(cnpj.getText().toString());
            usuario.setRua(rua.getText().toString());
            usuario.setTelefone(telefone.getText().toString());
            usuario.setNumero(numero.getText().toString());
            cadastrarUsuario();
        }
    });
    }

    private void cadastrarUsuario(){
    firebaseAuth = ConfiguracaoFirebase.getFirebaseAutenticacao();

        firebaseAuth.createUserWithEmailAndPassword(
                usuario.getEmail(), usuario.getSenha() )
                .addOnCompleteListener(CadastroActivity.this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if(task.isSuccessful()){
                            FirebaseUser usuarioFirebase = task.getResult().getUser();
                            usuario.setUid(usuarioFirebase.getUid());
                            usuario.salvar();

                            Toast.makeText(CadastroActivity.this, "Usuário cadastrado e logado.", Toast.LENGTH_SHORT).show();
                            Intent secondActivity = new Intent(CadastroActivity.this, MainActivity.class);
                            startActivity(secondActivity);

                        }
                        else{
                            Toast.makeText(CadastroActivity.this, "Erro ao cadastrar, tente outro email.", Toast.LENGTH_SHORT).show();
                        }
                    }
                });

    }
}


