package android.usuario.comandavirtual;


import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;


/**
 * A simple {@link Fragment} subclass.
 */
public class BlankFragment2 extends Fragment {

    private TextView link;
    private String url = "https://www.facebook.com/";


    public BlankFragment2() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_blank_fragment2, container, false);

        link = (TextView) view.findViewById(R.id.linkRegistro);


        link.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Toast.makeText(getActivity(), "Clicado", Toast.LENGTH_LONG).show();
                Uri uri = Uri.parse(url);

                Intent intent = new Intent (Intent.ACTION_VIEW, uri);
                startActivity(intent);

            }
        });

        return view;
    }

}
