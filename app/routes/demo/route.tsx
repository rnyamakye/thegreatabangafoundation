import { ThemeToggle } from "../../components/ThemeToggle";

export function meta() {
  return [
    { title: "Theme Toggle Demo - The Great Abanga Foundation" },
    {
      name: "description",
      content: "Demonstration of different theme toggle variants.",
    },
  ];
}

export default function Demo() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Theme Toggle Component Demo
        </h1>

        <div className="space-y-12">
          {/* Icon Variants */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Icon Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Small
                </h3>
                <ThemeToggle variant="icon" size="sm" />
                <ThemeToggle variant="icon" size="sm" showLabel />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Medium
                </h3>
                <ThemeToggle variant="icon" size="md" />
                <ThemeToggle variant="icon" size="md" showLabel />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Large
                </h3>
                <ThemeToggle variant="icon" size="lg" />
                <ThemeToggle variant="icon" size="lg" showLabel />
              </div>
            </div>
          </section>

          {/* Switch Variants */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Switch Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Small
                </h3>
                <ThemeToggle variant="switch" size="sm" />
                <ThemeToggle variant="switch" size="sm" showLabel />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Medium
                </h3>
                <ThemeToggle variant="switch" size="md" />
                <ThemeToggle variant="switch" size="md" showLabel />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Large
                </h3>
                <ThemeToggle variant="switch" size="lg" />
                <ThemeToggle variant="switch" size="lg" showLabel />
              </div>
            </div>
          </section>

          {/* Button Variants */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Button Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Small
                </h3>
                <ThemeToggle variant="button" size="sm" />
                <ThemeToggle variant="button" size="sm" showLabel />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Medium
                </h3>
                <ThemeToggle variant="button" size="md" />
                <ThemeToggle variant="button" size="md" showLabel />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Large
                </h3>
                <ThemeToggle variant="button" size="lg" />
                <ThemeToggle variant="button" size="lg" showLabel />
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Usage Examples
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Navbar Style (Icon)
                </h3>
                <ThemeToggle variant="icon" size="md" />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Settings Panel (Switch with Label)
                </h3>
                <ThemeToggle variant="switch" size="md" showLabel />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Footer or Mobile Menu (Button)
                </h3>
                <ThemeToggle variant="button" size="md" showLabel />
              </div>
            </div>
          </section>

          {/* Component Props */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Component Props
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b dark:border-gray-600">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                      Prop
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                      Default
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">
                      size
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      'sm' | 'md' | 'lg'
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      'md'
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      Size of the toggle component
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">
                      variant
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      'button' | 'switch' | 'icon'
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      'switch'
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      Visual style of the toggle
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">
                      showLabel
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      Whether to show text label
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">
                      className
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      ''
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                      Additional CSS classes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
