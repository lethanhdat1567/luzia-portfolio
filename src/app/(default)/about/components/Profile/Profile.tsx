import ProfileAvatar from "@/app/(default)/about/components/Profile/ProfileAvatar";
import ProfileInfo from "@/app/(default)/about/components/Profile/ProfileInfo";

function Profile() {
    return (
        <div className="app-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                {/* Avatar */}
                <div className="lg:col-span-6">
                    <ProfileAvatar />
                </div>

                {/* Info */}
                <div className="lg:col-span-6">
                    <ProfileInfo />
                </div>
            </div>
        </div>
    );
}

export default Profile;
