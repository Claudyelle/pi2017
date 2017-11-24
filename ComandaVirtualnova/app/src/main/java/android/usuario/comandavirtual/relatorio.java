package android.usuario.comandavirtual;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import org.w3c.dom.Text;

import config.ConfiguracaoFirebase;

public class relatorio extends Fragment {

    private Button andamento;
    private String uid;
    private String obs;
    private TextView mostraObs;
    private FirebaseAuth autenticacao = ConfiguracaoFirebase.getFirebaseAutenticacao();
    private FirebaseUser user;

    private DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReference();
    private  DatabaseReference produtoreferencia = databaseReference.child("Mesas");


    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        final View view = inflater.inflate(R.layout.fragment_relatorio, container, false);

        mostraObs = view.findViewById(R.id.mostraObs);
        andamento = (Button)view.findViewById(R.id.andamento);

        user = autenticacao.getCurrentUser();
        if(user != null){
            uid = user.getUid();
        }

        produtoreferencia.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
            obs = dataSnapshot.child(uid).child("Obs").getValue().toString();
                //        Log.i("FIREBASE", dataSnapshot.child(uid).child("Obs").getValue().toString());
                Log.i("Firebase", obs);
                mostraObs.setText(obs);
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
        mostraObs.setText(obs);
        andamento.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela6()).commit();

            }
        });



        return view;
    }
}
