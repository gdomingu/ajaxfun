class CreateWeathers < ActiveRecord::Migration
  def change
    create_table :weathers do |t|
      t.integer :lat
      t.integer :long
      t.string :url

      t.timestamps
    end
  end
end
