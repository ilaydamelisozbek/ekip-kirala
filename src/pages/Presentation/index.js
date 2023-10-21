/* eslint-disable react/no-unescaped-entities */
// prettier-ignore
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import 'css/index.css';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKTypography from "components/MKTypography";
/* import MKSocialButton from "components/MKSocialButton"; */

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";
import CenteredFooter from "examples/Footers/CenteredFooter";
/* import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard"; */

// Presentation page sections
/* import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download"; */

// Presentation page components
/* import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers"; */

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/mehter1.jpg";

import mehter2 from "assets/images/ekipKirala/mehter2.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        /* action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }} */
        sticky
      />
      <MKBox
        minHeight="90vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            {/* <MKTypography
              //variant="h1"
              color="white"
              mt={-35}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Ekip Kirala
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Her anınızda yanınızdayız
            </MKTypography> */}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 5,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div id="hakkimizda">
          <p className="hakkimizda">
            Başkent Diriliş Mehteran Ekibi; 2009 Yılından günümüze mehter ile sosyal faaliyet
            hizmetleri alanında profesyonel olarak hizmet vermektedir. " Arkamızda Bizi Eleştiren
            Değil, Teşekkür Eden Mutlu İnsanlar" Sloganıyla özverili ve kaliteli hizmet veriyoruz.
            Bu doğrultuda müşterilerimizin memnuniyeti ve bizleri tekrar tercih etmeleri hatta
            komşularına da tavsiye etmeleri bizim için büyük önem taşımaktadır. Ülkemizin yanında
            dünyanın pek çok ülkesinde değişik sosyal etkinliklerde gösteri ve konserler verdik.
            Gelecekte de bu sayıyı çok daha yukarılara çıkarma hedefindeyiz. Hizmetlerimizin içinde;
            Düğün, Nişan, Sünnet Düğünü, İşyeri açılışı, Kutlama, Bayram, Şenlik, Festival, Gelin
            çıkarma, Pasta çıkarma, Evlilik teklifi, Ramazan akşamları, Konserler, mevlevi
            gösterisi, ilahi dinletisi, halk oyunları gösterisi, sahne kurulması, ses ve ışık
            sistemleri ile sunucu hizmetleri yer almaktadır. Geniş kadro, geniş repertuvar ve
            profesyonel hizmetimizle etkinliğinizi şölene çevireceğimizden emin olabilirsiniz.
            Belirlenen gün ve saatte talep edilen yerde hazır olacağımızı, etkinliğinize büyük
            heyecan ve neşe katacağımızı belirtmek istiyoruz. Özel davetler üzerine Filistin, Bosna
            Hersek, Kazakistan, Macaristan, Dubai, Kıbrıs, Amerika, Rusya, Almanya, Hollanda,
            İsviçre ve Yunanistan gibi ülkelerde gösteri ve konser programları gerçekleştirdik.
            Edindiğimiz bilgi birikim ve tecrübe ile milli ve manevi duygularımızın daima zinde
            tutulmasına, ecdadımıza olan hürmet ve muhabbetimizin baki kalmasına vesile olabilmek
            amacıyla sunacağımız hizmetlerden derin memnuniyet duyuyoruz.
          </p>
        </div>
      </Card>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 5,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div id="ekipler">
          <h2 className="label">Mehter</h2>
          <img src={mehter2} height={300} width={300}></img>
        </div>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
