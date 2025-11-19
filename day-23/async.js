const herPromise = new Promise((resolve, reject) => {
    const success = true;
    const resReturnFunc = s => s === true ? resolve("she kept her promise" ): reject("she did not kept her promise");
    setTimeout(() => resReturnFunc(success), 5000);
});



const myJob = async () => {
    const herRespons = await herPromise;
    console.log(herRespons);
}


myJob();