package android.usuario.comandavirtual;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;


/**
 * A simple {@link Fragment} subclass.
 */
public class Tela3 extends Fragment {

    private Button buttonVoltarMesa02;
    private Button buttonFinalizarMesa02;

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

        buttonFinalizarMesa02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela4()).commit();

            }
        });



        return view;
    }

}
