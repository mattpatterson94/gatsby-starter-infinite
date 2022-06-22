import * as React from "react"

interface GoogleMapProps {
  placeId: string
  title: string
  className?: string
  googleMapKey: string
}

export default function GoogleMap({
  className,
  title,
  placeId,
  googleMapKey,
}: GoogleMapProps) {
  return (
    <div className={className}>
      <iframe
        width={"100%"}
        height={500}
        title={`Map of ${title}`}
        loading={"lazy"}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapKey}&q=place_id:${placeId}`}
      ></iframe>
    </div>
  )
}
