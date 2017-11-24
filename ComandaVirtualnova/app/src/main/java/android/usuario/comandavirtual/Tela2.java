package android.usuario.comandavirtual;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import config.ConfiguracaoFirebase;
import model.Usuario;


/**
 * A simple {@link Fragment} subclass.
 */
public class Tela2 extends Fragment {
    private Usuario usuario;
    private Button buttonProxMesa02;

    public Tela2() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_tela2, container, false);

        buttonProxMesa02 = (Button)view.findViewById(R.id.buttonProxMesa02);

        buttonProxMesa02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela3()).commit();

            }
        });



        return view;
    }

}
