package android.usuario.comandavirtual;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import config.ConfiguracaoFirebase;
import layout.BlankFragment;
import model.Usuario;


/**
 * A simple {@link Fragment} subclass.
 */
public class Tela3 extends Fragment {
    private Usuario usuario;
    private FirebaseAuth autenticacao;
    private FirebaseUser user;
    private EditText editTextObs;
    private Button buttonVoltarMesa02;
    private Button buttonFinalizarMesa02;
    private String uid;
    private DatabaseReference databaseReference;
    public Tela3() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_tela3, container, false);


        buttonVoltarMesa02 = (Button)view.findViewById(R.id.buttonVoltarMesa02);

        buttonVoltarMesa02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonFinalizarMesa02 = (Button)view.findViewById(R.id.buttonFinalizarMesa02);

        editTextObs = (EditText)view.findViewById(R.id.editTextObs);
        buttonFinalizarMesa02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                autenticacao = ConfiguracaoFirebase.getFirebaseAutenticacao();
                databaseReference = ConfiguracaoFirebase.getFirebase();

                user = autenticacao.getCurrentUser();
                if(user != null){
                    uid = user.getUid();
                }

                databaseReference.child("Mesas").child(uid).child("Bebida").child("Suco de Laranja").setValue("1");
                databaseReference.child("Mesas").child(uid).child("Bebida").child("Coca-Cola 2L").setValue("1");
                databaseReference.child("Mesas").child(uid).child("Comida").child("Frango caipira").setValue("1");
                databaseReference.child("Mesas").child(uid).child("Comida").child("Carne de sol").setValue("1");
                databaseReference.child("Mesas").child(uid).child("Obs").setValue(editTextObs.getText().toString());

                Toast.makeText(getActivity(), "Pedido registrado!", Toast.LENGTH_SHORT).show();

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela4()).commit();

            }
        });



        return view;
    }

}
