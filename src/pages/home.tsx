import Card from "../components/cardComponent";

const img_URI = process.env.PUBLIC_URL + "/img/harmaa_kissa.png";

const HomePage = () => {
    return(
        <Card
            imgSource={img_URI}
            imgDescription={"kissa"}
            title={"Projekti 1"}
            text={"Tekemäni projekti asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"}
        />
    );
};

export default HomePage;