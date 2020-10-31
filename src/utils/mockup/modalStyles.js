export const mainStyle = (backgroundColor) => {
    return (
        {
            content: {
                top: '13%',
                left: '32%',
                width: 640,
                height: 640,
                borderRadius: 50,
                backgroundColor,
                border: 'none',
              },
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              },
        }
    )
}