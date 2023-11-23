import React from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { Header } from "../../components/header/header";
import { Slider } from "../../components/slider";

import { sliderData } from "../../constants/slider";
import { TagBar } from "../../components/tagBar";
import {Cards} from "../../components/grid/cards";
import { Grid } from "../../components/grid";

export const Home = () => {
    return (
        <SafeAreaView>

            <Header />
        <ScrollView horizontal={false} style={{}}>
            <Slider items={sliderData} />
            <TagBar />
            <Grid />
        </ScrollView>
        </SafeAreaView>
    )
}