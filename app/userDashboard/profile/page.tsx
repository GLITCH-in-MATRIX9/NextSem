"use client";

import { useState, useEffect } from "react";
import { Edit, Save } from "lucide-react";

export default function ProfilePage() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<any>({
    name: "",
    email: "",
    branch: "",
    year: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  // FETCH BOTH APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [meRes, onboardRes] = await Promise.all([
          fetch("/api/auth/me", { credentials: "include" }),
          fetch("/api/user/onboarding", { credentials: "include" }),
        ]);

        const meData = await meRes.json();
        const onboardData = await onboardRes.json();

        setUser({
          name: meData?.user?.name || "",
          email: meData?.user?.email || "",
          branch: onboardData?.data?.branch || "",
          year: onboardData?.data?.year || "",
        });

      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //  SAVE EVERYTHING
  const handleSave = async () => {
    try {
      // Update name/email/password
      const res1 = await fetch("/api/auth/me", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          ...(passwords.currentPassword && passwords.newPassword
            ? passwords
            : {}),
        }),
      });

      const data1 = await res1.json();

      if (!res1.ok) {
        alert(data1.error || "Profile update failed");
        return;
      }

      //Update onboarding
      const res2 = await fetch("/api/user/onboarding", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch: user.branch,
          year: user.year,
        }),
      });

      const data2 = await res2.json();

      if (!res2.ok) {
        alert(data2.error || "Academic update failed");
        return;
      }

      alert("Profile updated successfully ");

      setEdit(false);
      setPasswords({
        currentPassword: "",
        newPassword: "",
      });

    } catch (err) {
      console.error("Save error:", err);
      alert("Something went wrong");
    }
  };

  if (loading) {
    return <p className="text-white p-6">Loading...</p>;
  }

  return (
    <div className="h-full overflow-y-auto px-6 py-6 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <button
          onClick={() => (edit ? handleSave() : setEdit(true))}
          className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800"
        >
          {edit ? <Save size={14} /> : <Edit size={14} />}
          {edit ? "Save" : "Edit"}
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-zinc-800" />

        <div className="space-y-1">
          <p className="text-white text-lg">{user.name}</p>
          <p className="text-sm text-zinc-500">{user.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 space-y-4">
        <p className="text-sm text-zinc-500">Details</p>

        {[
          { label: "Name", key: "name" },
          { label: "Email", key: "email" },
          { label: "Branch", key: "branch" },
          { label: "Year", key: "year" },
        ].map((field, i) => (
          <div key={i} className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500">
              {field.label}
            </label>

            {edit ? (
              <input
                value={user[field.key] || ""}
                onChange={(e) =>
                  setUser({
                    ...user,
                    [field.key]: e.target.value,
                  })
                }
                className="bg-[#0F0F0F] border border-zinc-900 rounded-lg px-3 py-2 text-sm text-white outline-none"
              />
            ) : (
              <p className="text-sm text-white">
                {user[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Change Password */}
      {edit && (
        <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 space-y-3">
          <p className="text-sm text-zinc-500">Change Password</p>

          <input
            type="password"
            placeholder="Current Password"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                currentPassword: e.target.value,
              })
            }
            className="bg-[#0F0F0F] border border-zinc-900 rounded-lg px-3 py-2 text-sm text-white w-full"
          />

          <input
            type="password"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                newPassword: e.target.value,
              })
            }
            className="bg-[#0F0F0F] border border-zinc-900 rounded-lg px-3 py-2 text-sm text-white w-full"
          />
        </div>
      )}
    </div>
  );
}