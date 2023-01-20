import {FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import styles from "./styles";
import courseList from "../../fixture/courseList.json"
import Button from "../../component/Button/Button";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getCourses} from "../../service/courseApi";
import {useEffect, useState} from "react";

const RendererCourse = (data) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{overflow:"hidden"}}>
            <View style={styles.container}>
                    <Text style={styles.title}>{data.index+1}</Text>
                    <Text style={styles.title}>{data.item.title}</Text>
                    <Text style={styles.desc}>{data.item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {data, loading} = useFetchQuery(getCourses, currentPage);

    const onChangeData =()=>{
        const newCourses = data?.data || [];

        setCourses((prevCourse)=>([
            ...prevCourse,
            ...newCourses
        ]))
    }

    const onChangeCurrentPage = () =>{
        if (currentPage !== data?.totalPage) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    }

    useEffect(()=>{
        if (data?.page){
            onChangeData();
        }
    }, [currentPage, data?.page])

    // console.log("berubah")
    return (
        <>
            <FlatList
                style={{backgroundColor: "lightgreen"}}
                data={courses}
                renderItem={RendererCourse}
                keyExtractor={(data) => data.id}
                onEndReached={onChangeCurrentPage}
                refreshing={loading}
            />
        </>
    )
}
export default CourseList;