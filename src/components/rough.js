useEffect(()=>{
    gsap.to(boxRef.current, {
      x: "2vw", // Move 80% of the viewport width to the right
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        markers: false, // Remove this after testing
      },
    });

    // ScrollTrigger for the second image box (moving down to top)
    gsap.to(boxTwoRef.current, {
      y: "-6vh", // Move 50% of the viewport height upwards
      scrollTrigger: {
        trigger: boxTwoRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: true,
        markers: false, // Remove this after testing
      },
    });
  },[])