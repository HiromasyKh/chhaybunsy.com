import Image from "next/image";

import profileImage from "../public/images/profile-image-16-9.jpeg";

const Profile = () => {
  return (
    <div className="flex flex-col-reverse gap-y-4 sm:flex-row sm:gap-x-8">
      <section className="basis-1/2 self-center">
        <h1 className="text-3xl sm:text-5xl pb-1">
          Hi, I&apos;m <span className="font-bold">Bunsy</span>.
        </h1>
        <p className="text-justify sm:text-left text-gray-600 dark:text-gray-200">
          I am a graduated student in{" "}
          <span className="font-semibold">Computer Science</span> at{" "}
          <span className="font-semibold">
            Paragon International University
          </span>
          . I love traveling, playing football, and hanging out with my friends.
          Don&apos;t be scared. I am so friendly and open-minded.
        </p>
      </section>
      <div className="basis-1/2 relative aspect-video">
        <Image
          src={profileImage}
          alt="Author's profile image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Profile;
