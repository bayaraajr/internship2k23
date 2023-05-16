import React, { FC, ReactElement, ReactNode } from 'react';

interface IGlassCard extends ReactElement {
    children: ReactNode
    [key: string]: any
}
const GlassCard: FC<IGlassCard> = ({ className, children, ...props }: IGlassCard) => {
    return (
        <div
            className={`p-5 rounded-2xl ${className}`}
            style={{
                background: "rgba(0, 0, 0, 0.5)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                "-webkit-backdrop-filter": "blur(10px)"
                // border: "1px solid rgba(255, 255, 255, 0.3)"

            }} {...props}>
            {
                children
            }
        </div >
    )
}

export default GlassCard;