import { Avatar, Container } from "@mui/material";
import Image from "next/image";
import {
    Backdrop,
    FeatureBoxItem,
    FeedBackPreviewSection,
    GridRowDouble,
    GridRowTriple,
    HeroCTA,
    ListStyleType,
    StyledHeroSection,
} from "../components/styled";
import StandardLayout from "../layouts/standard";
import { FaRegComment, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Reveal } from "../helpers/animations";
import CallToAction from "../components/cta";
import RequestDemoButton from "../components/requestDemoButton";
import { GetStaticProps, NextPage } from "next";
import { config } from "../config/config";
import { fetchSeoData } from "../helpers/common-helpers";
import { useEffect, useState } from "react";

type Props = {
    title: string;
    description: string;
    keyword: string;
    images: any[];
    [x: string]: any;
};

type ImageType = {
    alt: string;
    title: string;
    [x: string]: any;
};

const Home: NextPage = (props: Partial<Props>) => {
    const imgOneId = "1dcsmfkol5b1smqa";
    const imgTwoId = "1dcsmfkol5b1smqb";
    const imgThreeId = "1dcsmfkol5b1smqc";
    const [imageOne, setImageOne] = useState<Partial<ImageType>>({});
    const [imageTwo, setImageTwo] = useState<Partial<ImageType>>({});
    const [imageThree, setImageThree] = useState<Partial<ImageType>>({});

    useEffect(() => {
        if (props.images) {
            setImageOne(props.images.find((x) => x.id === imgOneId) ?? {});
            setImageTwo(props.images.find((x) => x.id === imgTwoId) ?? {});
            setImageThree(props.images.find((x) => x.id === imgThreeId) ?? {});
        }
    }, [props]);

    return (
        <StandardLayout {...props}>
            {/* HERO SECTION */}
            <StyledHeroSection>
                <Container className="flex items-center">
                    <GridRowDouble>
                        <HeroCTA className="prose-sm text-center md:prose-lg md:text-left">
                            <h1 className="font-bold text-blueGray-600 my-0 sm:my-0 md:my-0 lg:my-0">
                                Designed to transform you into a more confident
                                speaker
                            </h1>
                            <p className="text-gray-500">
                                We are a bunch of sincere and dedicated folks
                                passionate about helping those who come to us
                                reach their full potential and communicate with
                                confidence.
                            </p>
                            <div className="flex relative justify-center md:justify-start">
                                <RequestDemoButton />
                            </div>
                        </HeroCTA>
                        <motion.div
                            initial={Reveal.offscreen}
                            whileInView={Reveal.onscreen}
                        >
                            <Image
                                src={"/images/hero-img.png"}
                                alt={imageOne.alt}
                                title={imageOne.title}
                                layout="responsive"
                                width={752}
                                height={734}
                            />
                        </motion.div>
                    </GridRowDouble>
                </Container>
            </StyledHeroSection>

            {/* CLASS TYPES SECTION */}
            <section className="bg-cyan-50 py-8">
                <Container className="py-8">
                    <div className="w-full flex justify-center">
                        <div className="prose-sm text-center md:prose-lg">
                            <span className="font-medium text-xs text-red-500 uppercase">
                                Welcome to Carpe Diem Skills Academy
                            </span>
                            <h2 className="my-0 md:my-0 font-bold text-blueGray-700">
                                Our language courses
                            </h2>
                        </div>
                    </div>
                    <GridRowDouble className="my-8">
                        <motion.div
                            initial={Reveal.offscreen}
                            whileInView={Reveal.onscreen}
                            viewport={{ amount: 0.5 }}
                        >
                            <div className="my-4 md:my-0 flex flex-col justify-center items-center">
                                <Image
                                    src={"/images/adult-classes.png"}
                                    alt={imageTwo.alt}
                                    title={imageTwo.title}
                                    layout="intrinsic"
                                    width={270}
                                    height={245}
                                />
                                <div className="prose text-center max-w-lg mt-4 mb-7">
                                    <h2 className="text-blueGray-700">
                                        Learning Classes for Adults
                                    </h2>
                                    <p className="text-justify">
                                        Carpe Diem Skills Academy has
                                        unparalleled expertise in delivering
                                        corporate English language training
                                        solutions. We offer the highest calibre
                                        language training specializing in
                                        practical business vocabulary, role
                                        play, and also ESP (English for Specific
                                        Purposes) for corporate. Offering Best
                                        English training for corporate, we are
                                        committed to partnering with clients to
                                        deliver value-added training that brings
                                        tangible results. In order to
                                        communicate effectively in a
                                        multi-cultural business environment, it
                                        is important to be able to express one's
                                        ideas with impact and in appropriate
                                        style.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={Reveal.offscreen}
                            whileInView={Reveal.onscreen}
                            viewport={{ amount: 0.5 }}
                        >
                            <div className="my-4 md:my-0 flex flex-col justify-center items-center">
                                <Image
                                    src={"/images/kids-classes.png"}
                                    alt={imageThree.alt}
                                    title={imageThree.title}
                                    layout="intrinsic"
                                    width={270}
                                    height={245}
                                />
                                <div className="prose text-center max-w-lg mt-4 mb-7">
                                    <h2 className="text-blueGray-700">
                                        Learning Classes for kids
                                    </h2>
                                    <p className="text-justify">
                                        Carpe Diem's Offline &amp; Online
                                        platform is a place where your child can
                                        have 1-to-1 English language sessions
                                        with qualified English tutor which is a
                                        structured online language program for
                                        children. Carpe Diem offers online and
                                        offline sessions with conversation
                                        practice, personalized feedback, and
                                        human interaction in classes at an
                                        affordable price. We also prepare
                                        lessons and provide teaching materials
                                        based on your child's level or needs
                                        which includes Vocabulary, Phonics,
                                        Grammar, Pronunciation, Public speaking,
                                        Presentations skills, Group discussions,
                                        Stage fear eradication.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </GridRowDouble>
                </Container>
            </section>

            {/* COUNT SECTION */}
            <section className="bg-red-500">
                <Container>
                    <GridRowTriple className="divide-y-[1px] divide-x-0 md:divide-x-[1px] md:divide-y-0 divide-red-700">
                        <div className="p-6">
                            <div className="prose md:prose-lg text-center py-10">
                                <h1 className="text-white my-0 md:my-0">
                                    <CountUp
                                        start={2000}
                                        end={3000}
                                        duration={5}
                                        useEasing={true}
                                        suffix={"+"}
                                    />
                                </h1>
                                <p className="text-white uppercase my-0 md:my-0">
                                    Students
                                </p>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="prose md:prose-lg text-center py-10">
                                <h1 className="text-white my-0 md:my-0">
                                    <CountUp
                                        start={300}
                                        end={500}
                                        duration={5}
                                        useEasing={true}
                                        suffix={"+"}
                                    />
                                </h1>
                                <p className="text-white uppercase my-0 md:my-0">
                                    Sessions per day
                                </p>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="prose md:prose-lg text-center py-10">
                                <h1 className="text-white my-0 md:my-0">
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={5}
                                        useEasing={true}
                                        suffix={"+"}
                                    />
                                </h1>
                                <p className="text-white uppercase my-0 md:my-0">
                                    Corporate Clients
                                </p>
                            </div>
                        </div>
                    </GridRowTriple>
                </Container>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-white">
                <Container>
                    <div className="min-h-[400px] py-12 md:py-24">
                        <div className="flex flex-col items-center justify-center space-y-8">
                            <div className="prose md:prose-lg text-center">
                                <span className="text-red-500 uppercase">
                                    Carpe Diem Skills Academy
                                </span>
                                <h2 className="mt-0 md:mt-0 text-gray-700">
                                    Why choose us?
                                </h2>
                                <p>
                                    Ever since our inception in 2016, we have
                                    placed all our efforts on consistent and
                                    comprehensive training because unlike any
                                    other skill, teaching communication skills
                                    requires personal, dedicated attention, and
                                    care. At CDSA, we treat one another and our
                                    students as family.
                                </p>
                            </div>
                            <ul className="my-6 text-gray-500 grid grid-cols-2 md:grid-cols-5 gap-5">
                                <FeatureBoxItem>
                                    <ListStyleType>
                                        <FaStar />
                                    </ListStyleType>
                                    <p className="text-center">
                                        Practice based Online English courses
                                        accompanied with authenticated
                                        materials.
                                    </p>
                                </FeatureBoxItem>
                                <FeatureBoxItem>
                                    <ListStyleType>
                                        <FaStar />
                                    </ListStyleType>
                                    <p className="text-center">
                                        Timely assessments (Pre and Post) and
                                        regular feedback sessions by the
                                        trainer.
                                    </p>
                                </FeatureBoxItem>
                                <FeatureBoxItem>
                                    <ListStyleType>
                                        <FaStar />
                                    </ListStyleType>
                                    <p className="text-center">
                                        Audio and video support materials with
                                        exercises and activities for
                                        self-practice.
                                    </p>
                                </FeatureBoxItem>
                                <FeatureBoxItem>
                                    <ListStyleType>
                                        <FaStar />
                                    </ListStyleType>
                                    <p className="text-center">
                                        Interactive sessions with engaging
                                        topics make learning fun.
                                    </p>
                                </FeatureBoxItem>
                                <FeatureBoxItem>
                                    <ListStyleType>
                                        <FaStar />
                                    </ListStyleType>
                                    <p className="text-center">
                                        Maximum opportunities to hone your
                                        communication skills on a wide variety
                                        of topics to enhance confidence
                                    </p>
                                </FeatureBoxItem>
                            </ul>
                            <div className="flex justify-center py-12">
                                <RequestDemoButton color="secondary" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEEDBACK PREVIEW */}
            <FeedBackPreviewSection className="bg-[url('/images/feedback-bg.jpeg')]">
                <Backdrop />
                <Container className="relative z-10 min-h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="bg-red-500 p-6 md:p-12 space-y-6 relative">
                                <p className="prose italic font-mono text-white z-0">
                                    It is really a great experience of learning
                                    English here. The quality of the training is
                                    amazing and done in a professional way.
                                    Carpe Diem follows a very unique approach in
                                    training. They help us to learn, grow, and
                                    excel in life and it is a friendly learning
                                    environment. Thanks for giving us the
                                    wonderful pace to grow. Thanks to all the
                                    trainers and Carpe Diem.
                                </p>
                                <div className="flex space-x-6 text-white items-center italic z-0">
                                    <Avatar sizes="lg" />
                                    <p className="font-bold">Sridevi Amuthan</p>
                                </div>
                                <div className="absolute bottom-0 right-0 p-6 -z-1">
                                    <FaRegComment className="text-[142px] text-white opacity-20" />
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </Container>
            </FeedBackPreviewSection>

            {/* CTA */}
            <CallToAction />
        </StandardLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const seoData = await fetchSeoData(config.pageIndex.home);
    return { props: seoData, revalidate: 60 };
};

export default Home;
