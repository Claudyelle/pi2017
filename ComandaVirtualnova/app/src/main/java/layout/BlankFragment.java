package layout;


import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.usuario.comandavirtual.Tela2;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.content.Intent;
import android.usuario.comandavirtual.R;
import android.widget.Button;
import android.widget.FrameLayout;

/**
 * A simple {@link Fragment} subclass.
 */
public class BlankFragment extends Fragment {

    private Button buttonMesa01;
    private Button buttonMesa02;
    private Button buttonMesa03;
    private Button buttonMesa04;
    private Button buttonMesa05;
    private Button buttonMesa06;
    private Button buttonMesa07;
    private Button buttonMesa08;


    public BlankFragment() {
        // Required empty public constructor
    }
;

    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_blank, container, false);

        buttonMesa01 = (Button)view.findViewById(R.id.buttonMesa01);

        buttonMesa01.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

              getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa02 = (Button)view.findViewById(R.id.buttonMesa02);

        buttonMesa02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa03 = (Button)view.findViewById(R.id.buttonMesa03);

        buttonMesa03.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa04 = (Button)view.findViewById(R.id.buttonMesa04);

        buttonMesa04.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa05 = (Button)view.findViewById(R.id.buttonMesa05);

        buttonMesa05.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa06 = (Button)view.findViewById(R.id.buttonMesa06);

        buttonMesa06.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa07 = (Button)view.findViewById(R.id.buttonMesa07);

        buttonMesa07.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });

        buttonMesa08 = (Button)view.findViewById(R.id.buttonMesa08);

        buttonMesa08.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new Tela2()).commit();

            }
        });



        return view;
    }

}
