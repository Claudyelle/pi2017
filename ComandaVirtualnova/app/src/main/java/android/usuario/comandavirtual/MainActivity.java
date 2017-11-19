package android.usuario.comandavirtual;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;

import layout.BlankFragment;
import layout.tela2;

public class MainActivity extends AppCompatActivity {


    public Button button2;
    public Button button1;
    public Button button3;
    public Button button4;

    private FirebaseAuth firebaseAuth;
    private FrameLayout frame;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        frame = (FrameLayout) findViewById(R.id.frame);

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.frame, new BlankFragment())
                .commit();

        button1 = (Button) findViewById(R.id.button1);
        button2 = (Button) findViewById(R.id.button2);
        button3 = (Button) findViewById(R.id.button3);
        button4 = (Button) findViewById(R.id.button4);
        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment2()).commit();

            }
        });


        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment()).commit();

            }
        });
        button3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new tela2()).commit();

            }
        });


        button1 = (Button) findViewById(R.id.button1);

        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment()).commit();

            }
        });

        button1 = (Button) findViewById(R.id.button1);

        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment()).commit();

            }
        });
        firebaseAuth = FirebaseAuth.getInstance();

        button4.setOnClickListener(new View.OnClickListener(){
            @Override
                public void onClick(View w){
                if(firebaseAuth.getCurrentUser() != null){
                    firebaseAuth.signOut();
                    Toast.makeText(MainActivity.this, "Usuário desconectado", Toast.LENGTH_SHORT).show();
                    Intent secondActivity = new Intent(MainActivity.this, LoginActivity.class);
                    startActivity(secondActivity);
                }
            }
        });
    }
}
