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
public class Tela4 extends Fragment {

    private Button  buttonPedidos01;
    private Button  buttonPedidos02;
    private Button  buttonPedidos03;
    private Button  buttonPedidos04;
    private Button  buttonPedidos05;
    private Button  buttonPedidos06;
    private Button  buttonPedidos07;
    private Button  buttonPedidos08;

    public Tela4() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_tela4, container, false);

        buttonPedidos01 = (Button)view.findViewById(R.id.buttonPedidos01);

        buttonPedidos01.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos02 = (Button)view.findViewById(R.id.buttonPedidos02);

        buttonPedidos02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos03 = (Button)view.findViewById(R.id.buttonPedidos03);

        buttonPedidos03.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos04 = (Button)view.findViewById(R.id.buttonPedidos04);

        buttonPedidos04.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos05 = (Button)view.findViewById(R.id.buttonPedidos05);

        buttonPedidos05.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos06 = (Button)view.findViewById(R.id.buttonPedidos06);

        buttonPedidos06.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos07 = (Button)view.findViewById(R.id.buttonPedidos07);

        buttonPedidos07.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });

        buttonPedidos08 = (Button)view.findViewById(R.id.buttonPedidos08);

        buttonPedidos08.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getFragmentManager().beginTransaction().replace(R.id.frame, new relatorio()).commit();

            }
        });



        return view;
    }

}
