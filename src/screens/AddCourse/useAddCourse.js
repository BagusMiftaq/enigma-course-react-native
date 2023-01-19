import {useEffect, useState} from "react";

const useAddCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [courseFile, setCourseFile] = useState();
    const [courseTypeId, setCourseTypeId] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [disable, setDisable] = useState(true);

    const getter = {title, description, courseFile, courseTypeId, duration, level, disable};
    const setter = {
        title: setTitle,
        description: setDescription,
        courseFile: setCourseFile,
        courseTypeId: setCourseTypeId,
        duration: setDuration,
        level: setLevel
    }

    useEffect(() => {
        if (title && description && courseFile && courseTypeId && duration && level) {
            setDisable(false)
        } else
            setDisable(true)

    }, [title, description, courseFile, courseTypeId, duration, level])

    return {
        getter, setter
    }
}

export default useAddCourse;