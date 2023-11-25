import userService from "@/services/authService";
import { redirect } from "next/navigation";

export default async function ProvateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    try {
        const res = await userService.getUserInfo();
        if (res?.statusCode === 401) {
            throw new Error("No token");
        }
        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col flex-1">{children}</div>
                </div>
            </div>
        );
    } catch (err) {
        redirect("/login");
    }
}
