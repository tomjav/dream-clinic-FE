import React from 'react';
import CaruselComponent from "../common/carusel/CaruselComponent";

const HomeComponent = (props) => {

    return (
        <div>

            <div>
                <CaruselComponent imgs={['dwa.jpg','trzy.jpg', 'hospital.jpg']}/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2><strong>O nas</strong></h2>
                        <p>Już od ponad 20 lat dbamy o zdrowie naszych Pacjentów. Każdego dnia dokładamy wszelkich
                            starań, aby osoby znajdujące się pod naszą opieką były zadowolone ze świadczonych przez nas
                            usług, czuły się bezpiecznie i wiedziały, że mogą liczyć na pomoc i poradę doświadczonych
                            specjalistów.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h2><strong>Kontakt</strong></h2>
                        <p>
                            Call Center
                            Kontakt dla pacjentów
                            phone tel: (+48) 22 23 07 111
                            fax kom: (+48) 660 307 112
                            poniedziałek - sobota 7.00-21.00
                            niedziela 8.00-18.00
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h2><strong>Aktualności</strong></h2>
                        <p>2017-06-20
                            Zatwierdź wizytę za pomocą SMS!
                            Udostępniamy kolejny sposób samodzielnego zatwierdzania umówionych wizyt.
                            Poza naszą stroną nasi Pacjenci mogą potwierdzać wizyty SMS-em. Jeśli Twoja wizyta
                            kwalifikuje się do samodzielnego zatwierdzenia,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;